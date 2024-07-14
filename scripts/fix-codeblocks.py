# Fix issues that occur when building 
# the website with Shiki codeblocks
#
# Much of this was written with ChatGPT, 
# since I don't touch BeautifulSoup often

import os
from bs4 import BeautifulSoup

def process_html_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    soup = BeautifulSoup(html_content, 'html.parser')
    pre_tags = soup.find_all('pre', class_='shiki')

    # Set not-prose so that Tailwind doesn't cause
    # bugs in dark mode
    for pre_tag in pre_tags:
        code_tags = pre_tag.find_all('code')
        for code_tag in code_tags:
            classes = code_tag.get('class', [])
            if 'not-prose' not in classes:
                classes.append('not-prose')
                code_tag['class'] = classes
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(str(soup))

def process_directory(input_dir):
    for root, _, files in os.walk(input_dir):
        for filename in files:
            if filename.endswith('.html'):
                path = os.path.join(root, filename)
                process_html_file(path, path)
                print(f'Processed: {path}')

input_directory = './docs'
process_directory(input_directory)
