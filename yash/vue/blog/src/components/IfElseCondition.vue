<template> 
<h1>################ If Else ############</h1>
<h3>Technology </h3>
<label for="java">Java</label>
<input type="checkbox" id="java" value="Java" v-model="technology" />
<label for="javascript">JavaScript</label>
<input type="checkbox" id="javascript" value="javaScript" v-model="technology" />
<label for="php">PHP</label>
<input type="checkbox" id="php" value="PHP" v-model="technology" />
<label for="node">Node</label>
<input type="checkbox" id="node" value="Node" v-model="technology" />
<br />
<h3>WHo i am </h3>
<label for="Student">Student</label>
<input type="radio" id="Student" value="Student" name="proffession" v-model="proffession" />
<label for="Developer">Developer</label>
<input type="radio" id="Developer" value="Developer" name="proffession" v-model="proffession" />

<br />
<h4>Selected Technology {{technology}}</h4>
<br />
<h4>I am {{proffession}}</h4>
</template>

<script>
export default {
    name: "IfElseCondition",
    data() {
        return {
            technology: [],
            proffession: null,
            email: null,
            password: null
        }
    },
   
}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
