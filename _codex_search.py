import os
for root, dirs, files in os.walk('.'):
    for name in files:
        if name.endswith(('.html','.css','.js','.json','.txt')):
            path = os.path.join(root, name)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    data = f.read()
            except UnicodeDecodeError:
                continue
            if 'olivia' in data.lower():
                print(path)
