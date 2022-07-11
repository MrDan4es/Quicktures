const CopyToClipboard = (text: string) => {
    var textarea = document.createElement('textarea')
    var result
  
    try {
        textarea = document.createElement('textarea')
        textarea.setAttribute('readonly', 'true')
        textarea.setAttribute('contenteditable', 'true')
        textarea.style.position = 'fixed'
        textarea.value = text
    
        document.body.appendChild(textarea)
    
        textarea.focus()
        textarea.select()
    
        const range = document.createRange()
        range.selectNodeContents(textarea)
    
        const sel = window.getSelection() as Selection
        sel.removeAllRanges()
        sel.addRange(range)
    
        textarea.setSelectionRange(0, textarea.value.length)
        result = document.execCommand('copy')
    } catch (err) {
        console.error(err)
        result = null
    } finally {
        document.body.removeChild(textarea)
    }
  
    if (!result) {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
        const copyHotkey = isMac ? '⌘C' : 'CTRL+C'
        result = prompt(`Press ${copyHotkey}`, text)
        if (!result) {
            return false
        }
    }
    return true
}

export default CopyToClipboard
