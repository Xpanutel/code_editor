const htmlEditor = ace.edit('html')
htmlEditor.setTheme('ace/theme/merbivore')
htmlEditor.session.setMode('ace/mode/html')
htmlEditor.resize()
htmlEditor.setHighlightActiveLine(false);

const cssEditor = ace.edit('css')
cssEditor.setTheme('ace/theme/merbivore')
cssEditor.session.setMode('ace/mode/css')
cssEditor.resize()
cssEditor.setHighlightActiveLine(false);

const jsEditor = ace.edit('js')
jsEditor.setTheme('ace/theme/merbivore')
jsEditor.session.setMode('ace/mode/javascript')
jsEditor.resize()
jsEditor.setHighlightActiveLine(false);

function compiler() {
  let htmlValue = htmlEditor.getValue() 
  let cssValue = cssEditor.getValue() 
  let jsValue = jsEditor.getValue() 
  let result = document.getElementById('result').contentWindow.document

  result.open()
  result.writeln(
    '<style>' + 
    cssValue + 
    '</style>' + 
    htmlValue + 
    '<script>' + 
    jsValue + 
    '</script>'
  )
  result.close()
}

let allButtons = document.querySelectorAll('#button-wrapper button')
let allPanels = document.querySelectorAll('#ide-container .panel-wrapper')

const switchPanel = (panelIndex) => { switcher(panelIndex) }
switchPanel(0)

function runEdit(panelIndex) { 
  switcher(panelIndex)
  compiler()
}

function switcher(panelIndex) {
  allButtons.forEach(function(node) {
    node.style.background = ''
  })
  allButtons[panelIndex].style.background = "#1f4068"
  allPanels.forEach(function (node) {
    node.style.display = 'none'
  })
  allPanels[panelIndex].style.display = 'block'
}