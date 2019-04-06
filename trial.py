# specific to extracting information from word documents
from docx import Document
import docx
import re  # for regular expressions
# to pretty print our xml:
import xml.dom.minidom
tst = "shall"
trt = "will"

# from docx.shared import Inches
document = docx.Document('docs/36C24219Q0467-000.docx')
# f = open('docs/copy.html', 'a')
docText = []  # create a list of paragraphs
for paragraph in document.paragraphs:
    if paragraph.text:
        docText.append(paragraph.text)
a = open('docs/copy.html', 'w')
a.write('')
a.close()

for doc in docText:
    f = open('docs/copy.html', 'a')
    x = re.search(tst, doc)  # search doc for "shall"
    y = re.search(trt, doc)  # search doc for "will"
    if (x):  # if shall appears in doc
        # wraps each paragrah in p tags, class shall
        f.write("<p class=\'shall\'>" + doc + "</p>")
    elif (y):  # if will appears in doc
        # wraps each paragrah in p tags
        f.write("<p class=\'will\'>" + doc + "</p>")
    else:
        f.write("<p>" + doc + "</p>")
    f.close()
m = open('docs/copy.html', 'r')


print(m.read())
