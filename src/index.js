import './styles/input.css';

const tl= gsap.timeline({default :{ duration: 1 , ease: 'power3.easeOut'}})

tl.fromTo('#Card', 
{scale : 0 , borderRadius:'0rem' } , 
{scale : 1 , borderRadius : '1rem',

delay: 0.25 ,
duration : 2,
ease : 'elastic.out(1.5,1)'

})
tl.fromTo('#img', 
{y : -280 , borderRadius:'0rem' } , 
{y : 0 , borderRadius : '1rem',
duration : 3,
ease : 'elastic.out(1.5,1)'

}, "<50%")

tl.fromTo('#title', 
{ x: -280  } , 
{x : 0 ,
duration : 3,
ease : 'elastic.out(1,1)'

}, "<50%" )

tl.fromTo('#pag', 
{x : 280  } , 
{x: 0 ,
duration : 3,
ease : 'elastic.out(1,1)'

}, "<" )

