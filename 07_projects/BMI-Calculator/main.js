const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#result')
    if(height===''||height<0||isNaN(height)){
       results.value='Please Provide a Valid Height'
    }else if(weight===''||weight<0||isNaN(weight)){
       results.value='Please Provide a Valid Weight'
    }
    else{
        
        const result=(weight/((height*height)/10000))
        results.value=`${result}`
}
})