import React from "react";

const ReadMore = (props) => {




    function addClass(element, theClass) {
        element.classList.add(theClass);
    }

    function removeClass(element, theClass) {
        element.classList.remove(theClass);
    }

     function showMore(element, excerpt) {
            element.addEventListener("click", event => {
                const linkText = event.target.textContent.toLowerCase();
                event.preventDefault();

                console.log(this);
                if (linkText === "show more") {
                    element.textContent = "Show less";
                    removeClass(excerpt, "excerpt-hidden");
                    this.addClass(excerpt, "excerpt-visible");
                } else {
                    element.textContent = "Show more";
                    this.removeClass(excerpt, "excerpt-visible");
                    this.addClass(excerpt, "excerpt-hidden");
                }
            });
        }

         function showMorebtn(showMoreLinksTarget, excerptTarget) {


            const showMoreLinks = document.querySelectorAll(showMoreLinksTarget);

            showMoreLinks.forEach(function (link) {
                const excerpt = link.previousElementSibling.querySelector(excerptTarget);
                showMore(link, excerpt);
            });
        }




 function handelClick(e) {

        const txt =  document.getElementById('txt_dest')

const linkText = e.target.textContent.toLowerCase();
                e.preventDefault();

                console.log(this);
                if (linkText === "show more") {

                    console.log(e.target)
                   e.target.textContent = "Show less";
                   txt.classList.remove("excerpt-hidden");
                     txt.classList.add("excerpt-visible");



                }  if (linkText === "show less") {

                     e.target.textContent = "Show more";

                     txt.classList.remove("excerpt-visible");
                     txt.classList.add("excerpt-hidden");

                }
 }


    return (
        <div>
            <p className="js-excerpt excerpt-hidden" id={'txt_dest'}>
                {props.text}
            </p>

            <button

               className="button js-show-more has-text-weight-normal has-text-purple-enjoy is-outlined is-rounded is-dark" onClick={handelClick}>Show more</button>

        </div>


    )
}

export default ReadMore;