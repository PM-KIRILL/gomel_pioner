    const hamberger = document.querySelector(".hamberger");
        const mobile = document.querySelector(".mobile");
        const main_nav = document.querySelector(".main-list");
        const brand_nav = document.querySelector(".brand-img");
        const a = document.querySelector(".a");
        const b = document.querySelector(".b");
        const c = document.querySelector(".c");

    hamberger.addEventListener("click",()=>{
        mobile.classList.toggle("open");
        main_nav.classList.toggle("hide");
        brand_nav.classList.toggle("resize");
        a.classList.toggle("aclicked");
        b.classList.toggle("bclicked");
        c.classList.toggle("cclicked");
    })