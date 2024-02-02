## DOCTYPE html
The first thing in any HTML document is the preamble. For HTML, all you need is <!DOCTYPE html>. This may look like an HTML element, but it isn't. It's a special kind of node called "doctype". The doctype tells the browser to use standards mode. If omitted, browsers will use a different rendering mode known as quirks mode. Including the doctype helps prevent quirks mode.

##  html
The <html> element is the root element for an HTML document. It is the parent of the <head> and <body>, containing everything in the HTML document other than the doctype. If omitted it will be implied, but it is important to include it, as this is the element on which the language of the content of the document is declared.

## Content language
The lang language attribute added to the <html> tag defines the main language of the document. The value of the lang attribute is a two- or three-letter ISO language code followed by the region. The region is optional, but recommended, as a language can vary greatly between regions. If there is text within the page that is in a language different from the main document language, the lang attribute should be used to identify exceptions to the main language within the document.

## head tag
The <head>, or document metadata header, contains all the metadata for a site or application. The document metadata, including the document title, character set, viewport settings, description, base URL, stylesheet links, and icons, are found in the <head> element. While you may not need all these features, always include character set, title, and viewport settings.

## Character encoding
The default encoding in most browsers is windows-1252, depending on the locale. However, you should use UTF-8, as it enables the one- to four-byte encoding of all characters, even ones you didn't even know existed.By declaring UTF-8 (case-insensitive), you can even include emojis in your title (but please don't).

The character encoding is inherited into everything in the document, even <style> and <script>. This little declaration means you can include emojis in class names and the selectorAPI (again, please don't). If you do use emojis, make sure to use them in a way that enhances usability without harming accessibility.
## <title>
 The contents for the document title, the text between the opening and closing <title> tags, are displayed in the browser tab, the list of open windows, the history, search results

## Viewport metadata
 helps site responsiveness, enabling content to render well by default, no matter the viewport width.
 ```html 
 <meta name="viewport" content="width=device-width" />
 ```
The preceding code means "make the site responsive, starting by making the width of the content the width of the screen".
