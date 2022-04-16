$( document ).ready(function() {

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';')
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim()
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken')

    const motionMatchMedia = window.matchMedia('(prefers-reduced-motion)');
    const THRESHOLD = 15;
    
    function handleHover(e, item) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

        item.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }
    
    function resetStyles(e, item) {
      item.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
    
    if (!motionMatchMedia.matches && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        document.querySelectorAll('.image-card').forEach(item => {
            item.addEventListener('mousemove', event => {handleHover(event, item)})
            item.addEventListener('mouseleave', event => {resetStyles(event, item)})
        })
    }
    function copyToClipboard(string) {
        let textarea
        let result
      
        try {
            textarea = document.createElement('textarea')
            textarea.setAttribute('readonly', true)
            textarea.setAttribute('contenteditable', true)
            textarea.style.position = 'fixed'
            textarea.value = string;
        
            document.body.appendChild(textarea)
        
            textarea.focus()
            textarea.select()
        
            const range = document.createRange()
            range.selectNodeContents(textarea)
        
            const sel = window.getSelection()
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
      
        // manual copy fallback using prompt
        if (!result) {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const copyHotkey = isMac ? '⌘C' : 'CTRL+C';
            result = prompt(`Press ${copyHotkey}`, string); // eslint-disable-line no-alert
            if (!result) {
                return false;
            }
        }
        return true;
    }

    $(document).on('click', '.img-block' , function() {
        var src = $(this).attr('src')
        copyToClipboard(src)
        // var tempField = document.createElement("textarea")
        // document.body.appendChild(tempField)
        // tempField.value = src

        // if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        //     tempField.contentEditable = true
        //     tempField.readOnly = true
        //     var range = document.createRange()
        //     range.selectNodeContents(tempField)
        //     var selection = window.getSelection()
        //     selection.removeAllRanges()
        //     selection.addRange(range)
        //     el.setSelectionRange(0, 999999)
        // }
        // else {
        //     tempField.select()
        // }
        // document.execCommand("copy")
        // document.body.removeChild(tempField)

        $('#imageCopyToast').toast('show')
    })

    $(document).on('click', '.btn-inform', function() {
        let id = $(this).attr('id')
        let width = $('.img-block#' + id).get(0).naturalWidth
        let height = $('.img-block#' + id).get(0).naturalHeight
        console.log($(this).data())
    })

    $(document).on('click', '.btn-remove', function() {
        let id = $(this).attr('id')
        if (confirm('Do you want to delete the image?')) {
            

            $.ajax({
                url : '/api/images/' + id,
                dataType: 'json',
                type: 'DELETE',
                headers: {'X-CSRFToken': csrftoken},
                success: function () {
                    // $('#block-image-' + id).animate({
                    //     opacity: 0,
                    //   }, 1000, function() {
                    //     $('#block-image-' + id).remove()
                    //   });
                    $('#block-image-' + id).hide('slow', function(){ $('#block-image-' + id).remove(); });
                    $('#imageDeleteToast').toast('show')
                },
                error: function(response) {
                    alert(response.data)
                }
            }) 

        }
    })

    function checkImage(imageSrc, good, bad) {
        var img = new Image()
        img.onload = good
        img.onerror = bad
        img.src = imageSrc
    }

    $('#btn-add-img').click(function() {
        let btn = $(this)
        btn.addClass('disabled')
        
        
        checkImage($('#url-add-form').val(), function(){
            var d = new Date();
            var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
            let title = $('#title-add-form').val() || strDate
            $.ajax({
                url : '/api/images/?format=json',
                dataType: 'json',
                type: 'POST',
                headers: {'X-CSRFToken': csrftoken},
                data: {
                    'title': title,
                    'url': $('#url-add-form').val()
                }, 
                success: function (response) {
                    btn.removeClass('disabled')
                    $('#modal-add').modal('hide')
                    $('#imageAddToast').toast('show')
                    // console.log(Date(Date.parse(response.image.date_create)))
                    $('#images-container').prepend(`
                    <div class="col" id="block-image-${response.image.id}">
                        <div class="card image-card ratio ratio-1x1" id="image-card-${response.image.id}">
                            <img src="${response.image.url}" class="img-block" id="${response.image.id}" alt="...">
                        
                            <a href="javascript:void(0);" class="btn p-0 btn-outline-primary btn-inform" id="${response.image.id}" data-title="${response.image.title}" data-date="${response.image.date_create}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16">
                                    <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                                </svg>
                            </a>
                            <a href="javascript:void(0);" class="btn p-0 btn-outline-danger btn-remove" id="${response.image.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg>                          
                            </a>
                        </div>
                    </div>`)
                    let item = document.querySelector(`#image-card-${response.image.id}`)
                    item.addEventListener('mousemove', event => {handleHover(event, item)})
                    item.addEventListener('mouseleave', event => {resetStyles(event, item)})
                },
                error: function(response) {
                    btn.removeClass('disabled')
                }
            }) 
        }, function(){
            btn.removeClass('disabled')
            alert('Failed to save URL')
        })
    })
})
            