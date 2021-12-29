localstorage
> persistentStorage
> data available across the browser
> we need to remove manually

localStorage.setItem("mytoken","443gv4y45yg54")
undefined
localStorage.getItem("mytoken")
'443gv4y45yg54'
localStorage.removeItem("mytoken")
undefined

sessionStorage
> temporary storage
> data available for that particular website
> remove as soon as we close tab

sessionStorage.setItem('testkey','t5654g545')
undefined
sessionStorage.getItem('testkey')
't5654g545'
sessionStorage.removeItem('testkey')


cookies
> save wrt to time
> save wrt to domain

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1441731907.1640750893; _gat_gtag_UA_131256843_1=1'
document.cookie="city=delhi; expires=Fri, 31 Dec 2021 01:00:00 UTC"
'city=delhi; expires=Fri, 31 Dec 2021 01:00:00 UTC'
document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1441731907.1640750893; city=delhi'