const slideValue1 = document.querySelector(".span1");
      const inputSlider1 = document.querySelector(".input1");
      inputSlider1.oninput = (()=>{
        let value1 = inputSlider1.value;
        slideValue1.textContent = value1 * 1000  + ' conversion';
        slideValue1.style.left = value1 + "%";
        slideValue1.classList.add("show");
      });
      inputSlider1.onblur = (()=>{
        slideValue1.classList.remove("show"); 
      });

const slideValue2 = document.querySelector(".span2");
      const inputSlider2 = document.querySelector(".input2");
      inputSlider2.oninput = (()=>{
        let value2 = inputSlider2.value;
        slideValue2.textContent = value2 * 2000  + ' Impressions';
        slideValue2.style.left = value2 + "%";
        slideValue2.classList.add("show");
      });
      inputSlider2.onblur = (()=>{
        slideValue2.classList.remove("show"); 
      });

const slideValue3 = document.querySelector(".span3");
      const inputSlider3 = document.querySelector(".input3");
      inputSlider3.oninput = (()=>{
        let value3 = inputSlider3.value;
        slideValue3.textContent = Math.floor(value3 / 2)  + ' Domains';
        slideValue3.style.left = value3 * 2 + "%";
        slideValue3.classList.add("show");
      });
      inputSlider3.onblur = (()=>{
        slideValue3.classList.remove("show"); 
      });



