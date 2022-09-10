function init()
{
    objs = document.querySelector("select");
    interns = document.querySelectorAll("div")
    objs.addEventListener('click', (e) => {
            interns[0].style.display = "block";
            const name = e.target.
            for(j=1;j<interns.length;j++)
            {
                console.log(interns[j].innerHTML+ name)
                if(interns[j]==name)
                {
                    interns[j].style.display = "block"  ;
                }
            }
        });
}