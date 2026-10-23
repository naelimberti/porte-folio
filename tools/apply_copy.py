import re, json, glob, importlib.util, sys
COPY = {}

def apply_en(html):
    for key, (en, fr) in COPY.items():
        html = re.sub(r'(<(\w+)[^>]*data-i18n="' + re.escape(key) + r'"[^>]*>)(.*?)(</\2>)',
                      lambda m: m.group(1) + en + m.group(4), html, flags=re.S)
    return html

if __name__ == '__main__':
    spec = importlib.util.spec_from_file_location('copydata', sys.argv[1]); c = importlib.util.module_from_spec(spec); spec.loader.exec_module(c)
    COPY = c.COPY
    root = sys.argv[2]
    seen = set()
    for f in glob.glob(root + '/*.html') + glob.glob(root + '/projects/*.html'):
        s = open(f, encoding='utf8').read()
        for key in COPY:
            if f'data-i18n="{key}"' in s: seen.add(key)
        open(f, 'w', encoding='utf8').write(apply_en(s))
    print('EN keys not found in any page:', [k for k in COPY if k not in seen])
    p = root + '/assets/js/main.js'; js = open(p, encoding='utf8').read()
    missing = []
    for key, (en, fr) in COPY.items():
        pat = r"(\n\s+'" + re.escape(key) + r"': )(?:'(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\")"
        if not re.search(pat, js): missing.append(key); continue
        js = re.sub(pat, lambda m: m.group(1) + json.dumps(fr, ensure_ascii=False), js, count=1)
    print('FR keys missing in dictionary:', missing)
    open(p, 'w', encoding='utf8').write(js)
