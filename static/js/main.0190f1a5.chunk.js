(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(8),a=n.n(c),r=(n(13),n(14),n(0));var o=function(){return Object(r.jsxs)("div",{id:"header",children:[Object(r.jsx)("a",{href:"#about-section",class:"header-item",children:"About"}),Object(r.jsx)("a",{href:"#work-section",class:"header-item",children:"Resume"}),Object(r.jsx)("a",{href:"#projects-section",class:"header-item",children:"Projects"}),Object(r.jsx)("a",{href:"#contact-section",class:"header-item",children:"Contact"})]})},l=n(2),d=n(3),u=n(5),j=n(4),h=(n(16),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={title:e.title,url:e.url,icon:e.icon},i}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{class:"social-item",children:Object(r.jsx)("a",{class:"social-link",href:this.state.url,title:this.state.title,target:"_blank",rel:"noreferrer",children:this.state.icon})})}}]),n}(s.a.Component)),b=n.p+"static/media/Resume.cdc79172.pdf";n(17);var m=function(){return Object(r.jsxs)("div",{id:"sidebar",children:[Object(r.jsx)("div",{id:"sidebar-tip",children:"Find me @ "}),Object(r.jsx)(h,{title:"Resume (PDF)",url:b,icon:Object(r.jsx)("i",{class:"fas fa-file-pdf"})}),Object(r.jsx)(h,{title:"Email",url:"mailto:helenfang524@gmail.com",icon:Object(r.jsx)("i",{class:"fas fa-envelope",style:{fontSize:"0.9em"}})}),Object(r.jsx)(h,{title:"Github",url:"https://github.com/fang-helen",icon:Object(r.jsx)("i",{class:"fab fa-github"})}),Object(r.jsx)(h,{title:"LinkedIn",url:"https://www.linkedin.com/in/helen-fang/",icon:Object(r.jsx)("i",{class:"fab fa-linkedin"})})]})};n(18);var f=function(){return Object(r.jsxs)("div",{id:"react",children:["Built using React"," ",Object(r.jsx)("a",{href:"https://github.com/fang-helen/fang-helen.github.io/tree/project-code",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("i",{id:"react-icon",class:"fas fa-code"})})]})},g=n.p+"static/media/nyc_cropped.768388e8.png",p=(n(19),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={id:e.elementId,colored:e.colored,children:e.children,title:e.title},i}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{id:this.state.id,class:"section"+(this.state.colored?" colored":""),children:[this.state.title?Object(r.jsx)("div",{class:"section-title",children:this.state.title}):null,this.state.children]})}}]),n}(s.a.Component));n(20);var x=function(){return Object(r.jsx)("a",{href:"#work-section",children:Object(r.jsxs)("div",{class:"resume-button",children:[Object(r.jsx)("span",{children:"Jump to resume"})," ",Object(r.jsx)("i",{class:"fas fa-angle-double-down"})]})})};n(21);var O=function(){return Object(r.jsx)(p,{elementId:"intro-section",colored:!0,children:Object(r.jsxs)("div",{id:"intro-box",class:"center-contents",children:[Object(r.jsxs)("div",{id:"intro-box-right",children:[Object(r.jsx)("img",{src:g,id:"pfp",alt:"me!"}),Object(r.jsx)(x,{})]}),Object(r.jsxs)("div",{id:"blurb-box",children:[Object(r.jsx)("div",{id:"intro-greeting",children:"Hi! I'm"}),Object(r.jsx)("div",{id:"intro-title",class:"section-title",children:"Helen Fang"}),Object(r.jsx)("div",{class:"blurb one",children:"Computer Science @ UT Austin"}),Object(r.jsx)("div",{class:"blurb two",children:"Software Engineer"})]})]})})};var v=function(){return Object(r.jsx)(p,{elementId:"about-section",title:"About Me",children:Object(r.jsxs)("div",{id:"about-content",children:[Object(r.jsx)("p",{children:"I'm currently in the third year of my computer science degree at the University of Texas at Austin and an incoming SWE intern at Jane Street for summer 2022."}),Object(r.jsx)("p",{children:"I think software engineering is really great because I get to solve interesting problems every day! So far I've completed software internships at Google, Meta/Facebook, and Slack which were all lots of fun, and I enjoy backend and full-stack work."}),Object(r.jsx)("p",{children:"I also speak Mandarin fluently, and in my free time some things I enjoy include cooking, eating desserts, playing games with friends, and sewing!"})]})})},y=n(6),k=(n(22),"expanded"),w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={company:e.company,title:e.title,dates:e.dates,summary:e.summary,technologies:e.technologies,details:e.details,identifier:Math.random().toString(36).substr(2,9)},i.toggle=i.toggle.bind(Object(y.a)(i)),i}return Object(d.a)(n,[{key:"toggle",value:function(){var e=document.getElementById("arrow-"+this.state.identifier),t=document.getElementById("container-"+this.state.identifier),n=document.getElementById("bullets-"+this.state.identifier);e.classList.contains(k)?(t.style.height="0",e.classList.remove("one"),e.offsetWidth,e.classList.add("two")):(t.style.height=n.scrollHeight+"px",e.classList.remove("two"),e.offsetWidth,e.classList.add("one")),e.classList.toggle(k)}},{key:"render",value:function(){return Object(r.jsxs)("div",{class:"experience-tile",children:[Object(r.jsx)("div",{class:"experience-company",children:this.state.company}),Object(r.jsxs)("div",{class:"experience-container-top",children:[Object(r.jsx)("div",{class:"experience-title",children:this.state.title}),Object(r.jsx)("div",{class:"experience-dates",children:this.state.dates})]}),Object(r.jsx)("div",{class:"experience-container-bottom",children:Object(r.jsx)("div",{class:"experience-summary",children:this.state.summary})}),Object(r.jsxs)("div",{class:"experience-container-middle",children:[null!=this.state.details&&this.state.details.length>0?Object(r.jsx)("div",{class:"center-contents",children:Object(r.jsx)("div",{class:"experience-bullets-toggle",id:"toggle-"+this.state.identifier,title:"Expand",onClick:this.toggle,children:Object(r.jsx)("i",{class:"fa fa-chevron-down toggle-arrow",id:"arrow-"+this.state.identifier})})}):null,Object(r.jsx)("div",{class:"experience-technologies",children:this.state.technologies.join(", ")})]}),Object(r.jsx)("div",{class:"experience-bullets-container expanded",id:"container-"+this.state.identifier,children:Object(r.jsx)("div",{class:"experience-bullets",id:"bullets-"+this.state.identifier,children:this.state.details.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)("span",{children:e})},t)}))})})]})}}]),n}(s.a.Component);var S=function(){return Object(r.jsx)(p,{elementId:"work-section",colored:!0,title:"Work Experience",children:Object(r.jsxs)("div",{children:["(Or, download a PDF resume ",Object(r.jsx)("a",{class:"formatted",href:b,target:"_blank",rel:"noreferrer",children:"here"}),").",Object(r.jsx)(w,{company:"Meta (Facebook)",title:"SWE Intern",dates:"Aug 2021 - Nov 2021",summary:"Built out a new feature from end\u2011to\u2011end to set custom product\r cover images in creator collections on Instagram Shops.",technologies:["Hack/PHP","Python Django"],details:["Created a new database schema to support the feature and collaborated with other engineers, both within and outside immediate team, to integrate it with other Shops backend infrastructure.","Implemented full frontend flow by adding UI elements and async controllers using Bloks, a server\u2011side rendering framework.","Adapted a Django endpoint to more flexibly query product media."]}),Object(r.jsx)(w,{company:"Slack Technologies",title:"SWE Intern",dates:"May 2021 - Aug 2021",summary:"Completed two projects to improve the scalability, transparency, and accuracy of the Grid migrations estimates ecosystem.",technologies:["Hack/PHP","XHP","MySQL"],details:["Restructured the Enterprise Grid migrations framework to ensure duration estimates are front\u2011of\u2011mind and easily accounted for during development, improving scalability and accuracy for a system that represents $84M in ARR (18% of Slack Enterprise APR).","Designed and developed a tool to keep track of duration estimates in a MySQL table and alert of significant updates for scheduled migrations, in order to enhance transparency and streamline the migration process for both Slack representatives and customers"]}),Object(r.jsx)(w,{company:"UT Department of Computer Science",title:"Undergraduate Teaching Assistant",dates:"Jan 2021 - May 2021",summary:"Worked as teaching assistant for CS313E, a data structures and algorithms course taught in Python.",technologies:["Python"],details:["Wrote unit test cases and autograding scripts for student assignments and exams.","Held triweekly office hours to help students debug code.","Frequently interacted with students on Piazza to discuss concepts and answer questions, totaling 889 contributions over the semester."]}),Object(r.jsx)(w,{company:"Google",title:"STEP Intern",dates:"May 2020 - Aug 2020",summary:"Used Google Cloud APIs to build full-stack web applications.",technologies:["HTML","CSS","Java","Google Cloud","Apache Spark"],details:["Implemented an interactive portfolio page where visitors can add comments and translate content.","Worked closely with two other interns to design and develop a web application to search for, save, and create events within users\u2019 communities.","Utilized Apache Spark to create a recommendation system that combines collaborative and content\u2010based filtering to suggest events to users.","Engaged in an end-to-end software development cycle, including creating design docs, writing code, mocking objects and adding unit tests, setting up continuous integration, and completing code reviews."]}),Object(r.jsx)(w,{company:"Sanger Learning Center (UT School of Undergraduate Studies)",title:"Tutor",dates:"Jan 2020 - Dec 2020",summary:"Tutored other undergraduate students in data structures, linear algebra, and calculus.",technologies:[],details:[]})]})})},I=(n(23),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{class:"project-tile-square",children:Object(r.jsx)("div",{class:"project-tile"})})}}]),n}(s.a.Component)),P=I;n(24);var C=function(){return Object(r.jsx)(p,{elementId:"projects-section",title:"My Projects",children:Object(r.jsxs)("div",{id:"projects-container",children:[Object(r.jsx)(P,{title:"Polymesh Subdivider"}),Object(r.jsx)(P,{title:"PintOS"}),Object(r.jsx)(P,{title:"UniteBySTEP"}),Object(r.jsx)(P,{title:"Hingle Basin"})]})})};n(25),n(26),n(27);var E=function(){return Object(r.jsxs)("div",{id:"content",children:[Object(r.jsx)(o,{}),Object(r.jsxs)("div",{id:"page-contents",children:[Object(r.jsx)("div",{id:"sidebar-padding"}),Object(r.jsxs)("div",{id:"page-sections",children:[Object(r.jsx)(O,{}),Object(r.jsx)(f,{}),Object(r.jsx)(v,{}),Object(r.jsx)(S,{}),Object(r.jsx)(C,{})]}),Object(r.jsx)(m,{})]})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root")),A()}],[[28,1,2]]]);
//# sourceMappingURL=main.0190f1a5.chunk.js.map