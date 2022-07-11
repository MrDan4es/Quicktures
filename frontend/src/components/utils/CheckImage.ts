const CheckImage = (imageSrc: string, good: any, bad: any) => {
    var img = new Image()
    img.onload = good
    img.onerror = bad
    img.src = imageSrc
}

export default CheckImage
