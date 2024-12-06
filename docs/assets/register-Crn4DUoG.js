import{r as p,i as h,n as c,b as u,p as f,S as o,x as b,t as v}from"./Header-CNObJ4W4.js";import{g}from"./index-DjKJqAo0.js";var w=Object.defineProperty,m=Object.getOwnPropertyDescriptor,d=(i,e,r,l)=>{for(var t=l>1?void 0:l?m(e,r):e,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(l?s(e,r,t):s(t))||t);return l&&t&&w(e,r,t),t};let a=class extends u{constructor(){super(...arguments),this.valid={step1:!1,step2:!1}}get idInput(){return this.renderRoot.querySelector("#idField")}get pwInput(){return this.renderRoot.querySelector("#pwField")}handleValidation(i){const e=i.currentTarget,r=e.id==="idField"?"step1":"step2";this.valid[r]=e.value.length>5,e.value.length>5&&this.requestUpdate()}handleStep1(){const i=this.renderRoot.querySelector(".wrapper");g.to(i,{x:-460})}handleStep2(){f.collection("users").create({email:this.idInput.value,password:this.pwInput.value,passwordConfirm:this.pwInput.value}).then(()=>{o.fire({text:"회원가입 완료! 로그인 페이지로 이동합니다!"}).then(()=>{location.href="/src/pages/login/"})}).catch(()=>{o.fire({text:"잘못된 정보를 입력하셨습니다."}).then(()=>{location.reload()})})}render(){return b`
      <div class="container">
        <h2>회원가입</h2>
        <div class="line">
          <div></div>
        </div>
        <div class="wrapper">
          <div class="step-1">
            <h3>
              로그인에 사용할 <br />
              아이디를 입력해주세요.
            </h3>
            <label for="idField"></label>
            <input @input=${this.handleValidation} type="email" id="idField" placeholder="아이디(이메일)입력" />
            <button @click=${this.handleStep1} ?disabled=${!this.valid.step1} type="button" class="next-1">다음</button>
          </div>
          <div class="step-2">
            <h3>
              로그인에 사용할 <br />
              비밀번호를 입력해주세요.
            </h3>
            <label for="pwField"></label>
            <input @input=${this.handleValidation} type="password" id="pwField" placeholder="비밀번호 입력" />
            <button @click=${this.handleStep2} ?disabled=${!this.valid.step2} type="button" class="next-2">회원가입</button>
          </div>
        </div>
      </div>
    `}};a.styles=[p,h`
      .container {
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 440px;
        padding: 1rem;
        translate: -50% -50%;

        h2 {
          font-size: 3rem;
          font-weight: 900;
        }

        .line {
          height: 4px;
          margin-bottom: 1rem;
          background-color: #fff;

          div {
            width: 30%;
            height: 100%;
            background: orange;
          }
        }

        .wrapper {
          display: flex;
          justify-content: space-between;
          width: 900px;
          /* translate: -460px 0; */

          div {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 440px;
          }

          input {
            min-width: 200px;
            margin: 0.5rem 0;
            padding: 1rem;
            border: 1px solid #fff;
            outline: none;
          }

          button {
            margin-top: 1.5rem;
            padding: 1rem;
            border: none;
            background: dodgerblue;
            color: #fff;

            &:disabled {
              background-color: #979797;
              color: #222;
              cursor: not-allowed;
            }
          }
        }
      }
    `];d([c({type:Object})],a.prototype,"valid",2);a=d([v("register-element")],a);
