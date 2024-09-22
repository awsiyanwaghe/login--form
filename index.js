document.getElementById("signi").addEventListener('click',()=>{
    document.getElementById("signin").style.transform="translateX(100%)"
    document.getElementById("signup").style.transform="translateX(100%)"
    document.getElementById("signup").style.zIndex="1"
    document.getElementById("signin").style.zIndex="-1"
    


    document.getElementById('signin').style.borderTopRightRadius = '20px';
    document.getElementById('signin').style.borderBottomRightRadius = '20px';
    document.getElementById('signin').style.borderTopLeftRadius = '100px';
    document.getElementById('signin').style.borderBottomLeftRadius = '100px';

    document.getElementById('signup').style.borderTopRightRadius = '20px';
    document.getElementById('signup').style.borderBottomRightRadius = '20px';
    document.getElementById('signup').style.borderTopLeftRadius = '100px';
    document.getElementById('signup').style.borderBottomLeftRadius = '100px';

    

    
    
    
    
})

document.getElementById("signu").addEventListener('click',()=>{
    document.getElementById("signup").style.transform="translateX(0%)"
    document.getElementById("signin").style.transform="translateX(0%)"
    document.getElementById("signup").style.zIndex="-1"
    document.getElementById("signin").style.zIndex="1"

    
    
    

    document.getElementById('signin').style.borderTopRightRadius = '100px';
    document.getElementById('signin').style.borderBottomRightRadius = '100px';
    document.getElementById('signin').style.borderTopLeftRadius = '20px';
    document.getElementById('signin').style.borderBottomLeftRadius = '20px';

    document.getElementById('signup').style.borderTopRightRadius = '100px';
    document.getElementById('signup').style.borderBottomRightRadius = '100px';
    document.getElementById('signup').style.borderTopLeftRadius = '20px';
    document.getElementById('signup').style.borderBottomLeftRadius = '20px';

    

    
        
    })