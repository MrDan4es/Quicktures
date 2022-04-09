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

    $('.img-block').on('click', function() {
        var src = $(this).attr('src')

        var tempField = document.createElement("textarea")
        document.body.appendChild(tempField)
        tempField.value = src

        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            tempField.contentEditable = true
            tempField.readOnly = true
            var range = document.createRange()
            range.selectNodeContents(tempField)
            var selection = window.getSelection()
            selection.removeAllRanges()
            selection.addRange(range)
            el.setSelectionRange(0, 999999)
        }
        else {
            tempField.select()
        }
        document.execCommand("copy")
        document.body.removeChild(tempField)

        $('#imageCopyToast').toast('show')
    })

    $('.btn-remove').on('click', function() {
        var id = $(this).attr('id')
        if (confirm('Do you want to delete the image?')) {
            

            $.ajax({
                url : "/api/images/" + id,
                dataType: "json",
                type: 'DELETE',
                headers: {'X-CSRFToken': csrftoken},
                success: function () {
                    $('#block-image-' + id).remove()
                    $('#imageDeleteToast').toast('show')
                },
                error: function(response) {
                    alert(response.data)
                }
            }) 

        }
    })

    $('#btn-add-img').click(function() {
        let btn = $(this)
        btn.addClass('disabled')
        function checkImage(imageSrc, good, bad) {
            var img = new Image()
            img.onload = good
            img.onerror = bad
            img.src = imageSrc
        }
        
        checkImage($('#url-add-form').val(), function(){ 
            $.ajax({
                url : "/api/images/?format=json",
                dataType: "json",
                type: 'POST',
                headers: {'X-CSRFToken': csrftoken},
                data: {
                    'title': $('#title-add-form').val(),
                    'url': $('#url-add-form').val()
                }, 
                success: function (response) {
                    btn.removeClass('disabled')
                    $('#modal-add').modal('hide')
                    $('#imageAddToast').toast('show')
                    $('#images-container').prepend(`<div class="col">
                    <div class="card image-card ratio ratio-1x1">
                        <img src="${response.image.url}" class="card-img-top img-block" id="${response.image.id}" alt="...">
                        
                        <a href="javascript:void(0);" class="btn p-0 btn-outline-primary btn-inform" id="${response.image.id}">
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
                },
                error: function(response) {
                    alert(response.data)
                }
            }) 
        }, function(){
            btn.removeClass('disabled')
            alert("Failed to save URL")
        })

        
        
    })
})
            