const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = '1000'
canvas.height = '300'

context.beginPath()
context.arc(500, 150, 40, 0, 2*Math.PI, false)
context.fillStyle = 'red'
context.fill()
context.stroke()