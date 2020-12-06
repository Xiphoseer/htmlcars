<template>
  <ol>
    <li>LCARS is the user-interface of all Spaceships of the
    United Federation of Planets.</li>
    <li>LCARS is fundamentally a means of getting and setting the state
    of a complex system that interfaces with the real world.</li>
    <li>LCARS output is highly domain-specific. Its general chrome is
    consistent and minimalistic. Its data presentation is interactive,
    tailored to the task and mostly visual.</li>
    <li>LCARS input is versatile and precise. Commands are sent by touch
    or speech. Modes like yellow alert set defaults for the whole system.
    Procedures combine actions into single parameterized commands.</li>
    <li>LCARS state is structured and regular. Scalar or boolean values
    combined in structs and lists are distributed consistently across the
    system.</li>
    <li>LCARS interfaces are non-destructive and adaptable. Any form of data
    may be stored, analyzed or used to drive automated systems. Reusing data
    from an interface somewhere else in the system is explicitly
    encouraged.</li>
    <li>LCARS is dynamic. It will work reliably as configured but will also
    suggest new views and configurations based on usage patterns and processed
    data.</li>
  </ol>
</template>

<script>
export default {
  name: "lcars-manifesto"
}
</script>