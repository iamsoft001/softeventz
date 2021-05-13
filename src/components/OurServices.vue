<template>
  <div class="pa-10 service">
    <v-container>
      <v-img contain max-height="100" src="logoo.png"></v-img>
      <br />

      <div class="text-center white--text">
        <h3>
          Curriculum on Website Development, Mobile Application Development,
          User Interface/User Experience Design
        </h3>
        <h4 class="mt-3 text-uppercase white--text">course outline</h4>
      </div>
      <br />

      <v-row>
        <v-col cols="12" md="6">
          <div>
            <span>
              <h3 class="text-center white--text">Website Development</h3>
              <h3 class="ml-6 white--text">Basic</h3>
            </span>
            <v-expansion-panels inset focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><b>{{ html }}</b></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(hcontent, i) in hcontents"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ hcontent }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header
                  ><b>{{ css }}</b></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(scontent, i) in scontents"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ scontent }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header
                  ><b>{{ js }}</b></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(jcontent, i) in jcontents"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ jcontent }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <br />

          <div>
            <v-expansion-panels inset focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><h3>Intermediate</h3></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(wintermediate, i) in wintermediates"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ wintermediate }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header
                  ><h3>Advance</h3></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(wadvance, i) in wadvances"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ wadvance }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
        <br />

        <v-col cols="12" md="6">
          <div>
            <h3 class="text-center white--text">
              Mobile Application Development
            </h3>
            <v-expansion-panels inset focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><h3>Basic</h3></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(mbasic, i) in mbasics"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ mbasic }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header
                  ><h3>Intermediate</h3></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(mintermediate, i) in mintermediates"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ mintermediate }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header
                  ><h3>Advance</h3></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(madvance, i) in madvances"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ madvance }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <br />

          <div>
            <h3 class="text-center white--text">
              User Interface (UI)/User Experience (UX) Design
            </h3>
            <v-expansion-panels inset focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><h3>Basic</h3></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(ubasic, i) in ubasics"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ ubasic }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header
                  ><h3>Intermediate</h3></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(uintermediate, i) in uintermediates"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ uintermediate }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header
                  ><h3>Advance</h3></v-expansion-panel-header
                >
                <v-expansion-panel-content
                  v-for="(uadvance, i) in uadvances"
                  :key="i"
                  class="blue--text"
                >
                  <li>{{ uadvance }}</li>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      html: "Hypertext Markup Language (HTML)",
      hcontents: [
        "1. Basic structure",
        "2.	Open and close tags",
        "3.	Hello headings",
        "4.	Hi paragraph",
        "5.	Welcome span",
        "6.	We are strong and bold",
        "7.	We are emphasis and italic",
        "8.	Introducing block level element h, p, etc",
        "9.	These are inline level element span, strong, b, em and i",
        "10.	Let’s see the list – ol and ul",
        "11.	Here is the table",
        "12.	Keep things organize with layout element like div, section, aside, nav, header, footer and main",
        "13.	Collecting information with form",
        "14.	We are form elements input, textarea, select, buttons, etc",
        "15.	A little deep with input, input types: text, colour, password, radio, checkbox, date, url, number, email, range, hidden e.t.c",
        "16.	How about images",
        "17.	Let’s end with links",
        "18.	A simple website",
      ],

      css: "Cascading StyleSheets (CSS)",
      scontents: [
        "1.	The style tag, inline and external CSS",
        "2.	The link tag, linking external CSS",
        "3.	We are selectors",
        "a.	Class",
        "b.	Id",
        "c.	Element",
        "d. Attribute",
        "e. Sibling",
        "f. Descendent",
        "g. Child selectors",
        "4.	Let’s  colour our text",
        "5.	We can colour the background",
        "6.	Layout display",
        "7.	Spacing out",
        "8.	Meet the box model: Padding, Margin and Border",
        "9.	What about fonts, let’s check out fonts",
        "10.	Meet flexbox",
        "a.	display flex",
        "b.	flex direction",
        "c.	align-items",
        "d.	justify-content",
        "e.	flex-wrap",
        "f.	flex",
        "11.	Website responsiveness with media query",
        "12.	Let’s make our website colorful, beautiful and better",
      ],

      js: "JavaScript (JS)",
      jcontents: [
        "1.	The script tag, internal and inline JavaScript",
        "2.	The src tag, linking external JavaScript",
        "3.	Let’s interact, enter your name: using prompt, confirm",
        "4.	Hello name, welcome to our site: using alert",
        "5.	Let’s print and close our window",
        "6.	Variables Declaration and Identifiers: Introducing let and const ",
        "7.	Data types ",
        "a. Number",
        "b.	String",
        "c.	Boolean",
        "d.	Object",
        "e.	Arrays",
        "f.	Null",
        "g.	Undefined",
        "8.	Type Casting : +, parseInt, parseFloat, Number, toString()",
        "9.	Conditional Statement: Give and Take.",
        "a.	If",
        "b.	If-else",
        "c.	If, else-if, else",
        "d.	Switch.",
        "10.	Iteration /loop: Let’s do it again and again",
        "a.	For ",
        "b.	For of",
        "c.	For in",
        "d.	While",
        "e.	Do While",
        "11.	Function ",
        "a.	Declaration and Arugments",
        "a.	Calling and Params",
        "12.	 Meet the DOM: Document Object Model",
        "13.	Also Meet the WINDOW: Global Window Object ",
        "14.	The Query Selector: The one selector",
        "15.	The Query Selector All: The all selector",
        "16.	Time for event: Handling Events, the core of interactivity",
        "17.	Putting It Together",
        "18.	Let’s make our website interactive",
      ],

      wintermediates: [
        "1.	Command Line Interface (CLI)/Shell (console) programming",
        "2.	Frontend Development",
        "a.	Vue JS with Vuetify",
        "b.	React JS with Material Design",
        "3.	Backend Development",
        "a.	PHP",
        "b.	Node",
        "c.	Python",
      ],

      wadvances: [
        "1.	Frontend Development",
        "a.	Application Programing Interface (API): Consuming APIs",
        "b.	REST API",
        "c.	GRAPHQL",
        "2.	Backend Development",
        "a.	Designing and developing APIs",
        "b.	Database Design, Development and Management",
        "3.	Deployment and hosting on the internet for global access",
      ],

      mbasics: [
        "1. Mobile Development with React Native",
        "2. There is Also Vue Native",
        "3. Environment Setup: Hello Expo",
        "4. Hi View, Scrollview",
        "5. How About Text",
        "6. Using Props, State, and Context",
        "7. Touch Opacity",
        "8. Buttons and Actions",
        "9. Switch Checkbox",
        "10. Forms and Form Elements",
        "11. Let’s Do A  Little Stying with Flexbox",
        "12. Handling User Input with Text Input",
        "13. Display Information with List View",
        "14. A Todo Application",
      ],

      mintermediates: [
        "1.	Introducing Designs",
        "2.	User Interface Design Frameworks",
        "a.	React Native Element",
        "b.	React Native Paper",
        "c.	Native Base",
        "3.	Linking between pages with React Navigation",
        "4.	Working with Animations",
        "5.	Working with Images",
        "6.	Dialog Box with Modal",
        "7.	Monitoring progress with Activity Indicator",
      ],

      madvances: [
        "1.	Working With Map and Geolocation",
        "2.	Webview",
        "3.	Consuming APIs",
        "4.	Async Storage",
        "5.	App Deployment",
        "6.	Useful Resource",
      ],

      ubasics: [
        "1.	Introducing UI/UX Design",
        "2.	Meet the Good and Bad UI/UX  Designs",
        "3.	Environment Setup: Meet Figma",
        "4.	Know The Rules",
        "5.	Design Principles and Thinking",
        "6.	White Space",
        "7.	Color and Balancing",
        "8.	Fonts, Family and Clarity",
        "9.	Typography",
        "10. Contrast and Composition",
        "11.	Alignment and Grid Systems",
        "12.	The box model",
        "13.	Visual Hierarchy",
        "14.	Reproduce These Designs: working with existing designs",
      ],

      uintermediates: [
        "1.	Goal-driven design",
        "2.	Usability and Reusability",
        "3.	Affordance and signifier",
        "4.	Layout and Orientation",
        "5.	Navigation",
        "6.	Placement",
        "7.	Sizing",
        "8.	Ordering",
        "9.	Making better designs: improving existing designs and making new better designs",
      ],

      uadvances: [
        "1.	UI Components",
        "2.	Structural design",
        "3.	Blocking grayscale with user flow",
        "4.	Interaction design",
        "5.	Identifying User Needs",
        "6.	Responsive design",
        "7.	Cooling ability",
        "8.	Reflection and presentations",
        "9.	Useful resources",
      ],
    };
  },
};
</script>
<style>
.service {
  color: aqua;
  background-color: rgba(44, 5, 5, 0.658);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
