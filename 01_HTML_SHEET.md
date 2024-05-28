<!-- @format -->

# **Lista tag HTML**

Lista dei tag più comuni e delle loro funzioni, suddivisi in categorie:

# **Tag di base**

## **Struttura della pagina:**

**`<!DOCTYPE html>:`** Dichiara il tipo di documento HTML.

**`<html> </html>:`** Crea un documento HTML

**`<head> </head>:`** Disattiva il titolo e le altre informazioni non visualizzate.

**`<body> </body>:`** Disattiva la parte visibile del documento

**`<title> </title>:`** Inserisce il nome del documento nella barra del titolo; quando si inseriscono i segnalibri nelle pagine, questo è ciò che viene inserito nel segnalibro Attributi del corpo (utilizzati solo nelle newsletter via e-mail)

**`<body bgcolor=?>:`** Imposta il colore di sfondo, utilizzando il nome o il valore esadecimale.

**`<body text=?>:`** Imposta il colore del testo, utilizzando il nome o il valore esadecimale.

**`<body link=?>:`** Imposta il colore dei collegamenti, utilizzando il nome o il valore esadecimale.

**`<body vlink=?>:`** Imposta il colore dei collegamenti visitati, utilizzando il nome o il valore esadecimale

**`<body alink=?>:`** Imposta il colore dei collegamenti attivi (mentre si fa clic con il mouse)

## **Text Tags**

**`<pre> </pre>:`** Crea testo preformattato

**`<h1> </h1> --> <h6> </h6>:`** Crea titoli -- H1=più grande, H6=più piccolo

**`<b> </b>:`** Crea testo in grassetto (dovrebbe invece usare `<strong>`)

**`<i> </i>:`** Crea testo in corsivo (dovrebbe invece usare `<em>`)

**`<tt> </tt>:`** Crea testo in stile macchina da scrivere

**`<code> </code>:`** Utilizzato per definire il codice sorgente, di solito monospazio.

**`<cite> </cite>:`** Crea una citazione, solitamente elaborata in corsivo.

**`<address> </address>:`** Crea una sezione di indirizzo, solitamente elaborata in corsivo

**`<em> </em>:`** Enfatizza una parola (di solito elaborata in corsivo)

**`<strong> </strong>:`** Enfatizza una parola (solitamente elaborata in grassetto)

**`<font size=?> </font>:`** Imposta la dimensione del carattere da 1 a 7 (dovrebbe invece utilizzare i CSS).

**`<font color=?> </font>:`** Imposta il colore dei caratteri (dovrebbe invece usare i CSS)

**`<font face=?> </font>:`** Definisce il font utilizzato (dovrebbe invece utilizzare i CSS)

## **Links**

**`<a href="URL">clickable text</a>:`** Crea un collegamento ipertestuale a un localizzatore uniforme di risorse.

**`<a href="mailto:EMAIL_ADDRESS">clickable text</a>:`** Crea un collegamento ipertestuale a un indirizzo e-mail

**`<a name="NAME">:`** Creates a target location within a document

**`<a href="#NAME">clickable text</a>:`** Creates a link to that target location

## **Formatting**

**`<p> </p>:`** Creates a new paragraph

**`<br>:`** AInserts a line break (carriage return)

**`<blockquote> </blockquote>:`** Puts content in a quote - indents text from both sides

**`<div> </div>:`** Used to format block content with CSS

**`<span> </span>:`** Used to format inline content with CSS

## **Lists**

**`<ul> </ul>:`** Creates an unordered list

**`<ol start=?> </ol>:`** Creates an ordered list (start=xx, where xx is a counting number)

**`<li> </li>:`** Encompasses each list item

**`<dl> </dl>:`** Creates a definition list

**`<dt>:`** Precedes eachdefintion term

**`<dd>:`** Precedes eachdefintion

## **Graphical elements**

**`<hr>:`** Inserts a horizontal rule

**`<hr size=?>:`** Sets size (height) of horizontal rule

**`<hr width=?>:`** Sets width of rule (as a % or absolute pixel length)

**`<hr noshade>:`** Creates a horizontal rule without a shadow

**`<img src="URL" />:`** Adds image; it is a separate file located at the URL

**`<img src="URL" align=?>:`** Aligns image left/right/center/bottom/top/middle (use CSS)

**`<img src="URL" border=?>:`** Sets size of border surrounding image (use CSS)

**`<img src="URL" height=?>:`** Sets height of image, in pixels

**`<img src="URL" width=?>:`** Sets width of image, in pixels

**`<img src="URL" alt=?>:`** Sets the alternate text for browsers that can't process images (required by the ADA)

## **Forms**

**`<form> </form>:`** Defines a form

**`<select multiple name=? size=?> </select>:`** Creates a scrolling menu. Size sets the number of menu items visible before user needs to scroll.

**`<select name=?> </select>:`** Creates a pulldown menu

**`<option>:`** Sets off each menu item

**`<textarea name=? cols="x" rows="y"></textarea>:`** Creates a text box area. Columns set the width; rows set the height.

**`<input type="checkbox" name=? value=?>:`** Creates a checkbox.

**`<input type="checkbox" name=? value=? checked>:`** Creates a checkbox which is pre-checked.

**`<input type="radio" name=? value=?>:`** Creates a radio button.

**`<input type="radio" name=? value=? checked>:`** Creates a radio button which is pre-checked.

**`<input type="text" name=? size=?>:`** Creates a one-line text area. Size sets length, in characters.

**`<input type="submit" value=?>:`** Creates a submit button. Value sets the text in the submit button.

**`<input type="image" name=? src=? border=? alt=?>`** :Creates a submit button using an image.

**`<input type="reset">:`** Creates a reset button

Tables (use only for data layout - use CSS for page layout) Table attributes (only use for email newsletters)

**`<table> </table>:`** Creates a table

**`<tr> </tr>:`** Sets off each row in a table

**`<td> </td>:`** Sets off each cell in a row

**`<th> </th>:`** Sets off the table header (a normal cell with bold, centered text)

**`<table border=?>:`** Sets the width of the border around table cells

**`<table cellspacing=?>:`** Sets amount of space between table cells

**`<table cellpadding=?>:`** Sets amount of space between a cell's border and its contents

**`<table width=?>:`** Sets width of the table in pixels or as a percentage

**`<tr align=?>:`** Sets alignment for cells within the row (left/center/right)

**`<td align=?>:`** Sets alignment for cells (left/center/right)

**`<tr valign=?>:`** Sets vertical alignment for cells within the row (top/middle/bottom)

**`<td valign=?>:`** Sets vertical alignment for cell (top/middle/bottom)

**`<td rowspan=?>:`** Sets number of rows a cell should span (default=1)

**`<td colspan=?>:`** Sets number of columns a cell should span

**`<td nowrap>:`** Prevents lines within a cell from being broken to fit

## **Commenti:**

``: Inserisce un commento nel codice HTML **(non visibile nel browser)**.

## **Altri tag comuni:**

**`<div>:`** Definisce una sezione generica di contenuto.

**`<span>:`** Raggruppa un pezzo di testo per formattarlo o applicare stili CSS.

**`<hr>:`** Inserisce una linea orizzontale.

**`<meta>:`** Fornisce metadati alla pagina web (non visibili nel browser).

Oltre ai tag HTML più comuni esistono numerosi altri tag meno comuni e tag specifici per **_HTML5_**.
Ecco alcuni esempi:

## **Tag multimediali:**

**`<audio>:`** Inserisce un'audio clip nella pagina.

**`<video>:`** Inserisce un video nella pagina.

**`<source>:`** Specifica il file audio o video da riprodurre.

**`<track>:`** Aggiunge sottotitoli o tracce audio alternative a un'audio o video clip.

## **Tag per incorporare contenuti:**

**`<iframe>:`** Incorpora un contenuto esterno (ad esempio, un'altra pagina web o un video) all'interno della pagina.

**`<embed>:`** Incorpora un contenuto multimediale (ad esempio, un video o un plugin) all'interno della pagina.

## **Tag per i dati:**

**`<data>:`** Definisce un piccolo pezzo di dati che può essere utilizzato da script o altri tag.

**`<datalist>0:`** Crea una lista di opzioni per un input di tipo text.

## **Tag per il modulo:**

**`<details>:`** Crea un elemento dettagliato che può essere espanso o contratto dall'utente.

**`<summary>:`** Fornisce un riepilogo di un elemento details.

**`<meter>:`** Visualizza l'avanzamento di un'operazione o di un processo.

**`<progress>:`** Visualizza il progresso del caricamento di un file o di un'operazione.

**`<output>:`** Visualizza il risultato di un'operazione o di un calcolo.

## **Tag specifici per _HTML5:_**

**`<canvas>:`** Crea un'area grafica sulla quale è possibile disegnare immagini o animazioni con JavaScript.

**`<figure>:`** Definisce un contenuto figurativo (ad esempio, un'immagine, una foto, un grafico) e la sua didascalia.

**`<figcaption>:`** Fornisce una didascalia a un elemento figure.

**`<mark>:`** Evidenzia un testo importante.

**`<nav>:`** Definisce una sezione di navigazione all'interno della pagina.

**`<section>:`** Definisce una sezione di contenuto all'interno della pagina.

**`<aside>:`** Definisce un contenuto secondario all'interno della pagina (ad esempio, una barra laterale).

**`<time>:`** Formatta una data o un'ora.

**`<wbr>:`** Inserisce un'interruzione di riga forzata.

È importante sottolineare che non tutti i browser supportano tutti i tag HTML5.
Per garantire la compatibilità con i diversi browser, è consigliabile utilizzare i tag HTML5 con cautela e testare il proprio codice su browser differenti.
Oltre ai tag elencati, HTML5 introduce anche nuovi attributi e API JavaScript che consentono di creare siti web più ricchi e interattivi.

Questa è solo una panoramica.
Per imparare a usare correttamente l'HTML, è importante consultare la documentazione ufficiale e fare pratica con la scrittura di codice.
