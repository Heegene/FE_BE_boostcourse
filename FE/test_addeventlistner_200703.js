var el = document.querySelector(".outside");
el.addEventListener("mouseover", function(evt) {
        console.log("clicked!!", evt);
        var target = evt.target;
        console.log(target.className, target.nodeName);
        console.log(target.innerText); // 해당 element의 텍스트 출력 
    });

// function(evt) 하고 console log 뒤에 evt 하면
// 마우스이벤트의 키와 밸류를 볼 수 있음
// type은 mouseover이고 이런것들 
// evt 가 parameter로 작동했을 때 기준 


// 이렇게 하면 클래스명 outside, 태그명 div 인거 확인가능
// 출력결과 outside DIV 