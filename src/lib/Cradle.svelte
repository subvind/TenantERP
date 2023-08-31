<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    var Example = Example || {};

    Example.newtonsCradle = function() {
      var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Composites = Matter.Composites,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite;

      // create engine
      var engine = Engine.create(),
        world = engine.world;

      // create renderer
      var render = Render.create({
        element: document.querySelector('#matterjs'),
        engine: engine,
        options: {
          width: 800,
          height: 250,
          showVelocity: false,
          background: 'transparent',
          wireframeBackground: 'transparent;',
          wireframes: false,
        }
      });

      Render.run(render);

      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);

      // see newtonsCradle function defined later in this file
      var cradle = Example.newtonsCradle.newtonsCradle(250, 25, 6, 30, 200);
      Composite.add(world, cradle);
      Body.translate(cradle.bodies[0], { x: -180, y: -100 });
      Body.translate(cradle.bodies[1], { x: -180, y: -100 });

      // add mouse control
      var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false
            }
          }
        });
      mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
      mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

      Composite.add(world, mouseConstraint);

      // keep the mouse in sync with rendering
      render.mouse = mouse;

      // fit the render viewport to the scene
      Render.lookAt(render, {
          min: { x: 0, y: 50 },
          max: { x: 800, y: 250 }
      });

      // context for MatterTools.Demo
      return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
          Matter.Render.stop(render);
          Matter.Runner.stop(runner);
        }
      };
    };

    /**
    * Creates a composite with a Newton's Cradle setup of bodies and constraints.
    * @method newtonsCradle
    * @param {number} xx
    * @param {number} yy
    * @param {number} number
    * @param {number} size
    * @param {number} length
    * @return {composite} A new composite newtonsCradle body
    */
    Example.newtonsCradle.newtonsCradle = function(xx, yy, number, size, length) {
      var Composite = Matter.Composite,
        Constraint = Matter.Constraint,
        Bodies = Matter.Bodies;

      var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

      for (var i = 0; i < number; i++) {
        var separation = 1.9,
          circle = Bodies.circle(xx + i * (size * separation), yy + length, size, 
              { render: { strokeStyle: 'black', fillStyle: 'black'}, inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0, slop: 1 }),
          constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle, render: { strokeStyle: 'black' } });

        Composite.addBody(newtonsCradle, circle);
        Composite.addConstraint(newtonsCradle, constraint);
      }

      return newtonsCradle;
    };

    if (typeof module !== 'undefined') {
      module.exports = Example.newtonsCradle;
    }

    Example.newtonsCradle()
  })

</script>

<div id="matterjs"></div>

<style>
  #matterjs {
    margin: 0 auto;
    background: transparent !important;
    min-height: 250px;
    justify-content: center;
    display: flex;
  }
</style>