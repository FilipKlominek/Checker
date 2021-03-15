document.write('<div class="container">')

document.write('<table>')
for (let i = 0; i < 8; i++) {
    document.write('<tr>')
    for (let j = 0; j < 8; j++) {
        /*
        if ((i + j) % 2 == 0) document.write(`<td bgcolor="#000000"></td>`)
        else document.write(`<td bgcolor="#ffffff"></td>`)
        */
        if ((i + j) % 2 == 0) document.write(`<td class="black""></td>`)
        else document.write(`<td class="white"></td>`)
    }
    document.write('</tr>')
}
document.write('</table>')
document.write('</div>')