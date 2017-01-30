<h3>Instalación</h3>
<ol>
    <li>
    <p><b><code>clone</code></b></li>
    <li>
    <p><b><code>npm install o yarn install</code></b></li>
    <li>
    <p><b><code>npm start</code></b></li>
</ol>
<p></p>
<h3>Estructura de archivos</h3>
<p>La estructura de archivos esta basada en el style guide de todd motto
    <a href="https://github.com/toddmotto/angular-styleguide" target="_blank">https://github.com/toddmotto/angular-styleguide</a>
</p>
<pre>
  client
  ⋅⋅app/
  ⋅⋅⋅⋅app.js * modulo de angular principal
  ⋅⋅⋅⋅app.html * template de app
  ⋅⋅⋅⋅common/ * funcionalidad genérica en este caso solo tiene el user.service que funcionaria como "store"
  ⋅⋅⋅⋅components/ * donde viven los componente
  ⋅⋅⋅⋅⋅⋅components.js * components modulo de angular que contiene a los componentes
  ⋅⋅⋅⋅⋅⋅home/ * carpeta del componente home
  ⋅⋅⋅⋅⋅⋅⋅⋅home.js * archivo de entrada de home es un modulo angular (rutas, configuraciones)
  ⋅⋅⋅⋅⋅⋅⋅⋅home.component.js * directiva de home
  ⋅⋅⋅⋅⋅⋅⋅⋅home.controller.js * controller de home
  ⋅⋅⋅⋅⋅⋅⋅⋅home.scss * estilos de home
  ⋅⋅⋅⋅⋅⋅⋅⋅home.html * template de home
  ⋅⋅⋅⋅⋅⋅⋅⋅home.spec.js * tests de home (se testea por modulo, componente, y controller)
  ⋅⋅⋅⋅⋅⋅⋅
</pre>
<h3>Testing Setup</h3>
Los tests estan escritos en ES6 y el testing stack es:
<ul>
    <li>Karma</li>
    <li>Webpack + Babel</li>
    <li>Mocha</li>
    <li>Chai</li>
</ul>
<h3>Tasks</h3>
<p><b><code>npm start</code></b> Con gulp se levanta un <a href="https://browsersync.io/" target="_blank">browser-sync</a>      que permite conectar otros dispositivos a la red para probar la aplicacion (ver puerto 3001). Con webpack se genera
    el bundle</p>
<p><b><code>npm test</code></b> Karma con Webpack corren todos los archivos que machean con <code>*.spec.js</code> adentro
    de <code>app</code> folder.</p>
<p><b><code>npm run build</code></b> corre webpack, concatena y comprime el "bundle" los assets estan en dist/bundle.js</p>
<p><b><code>npm run component</code></b> con esta task se pueden crear el scaffold de un componente sin tener que crear
    todos los archivos a mano.
    <b><code>npm run component -- --name componentName</code></b> se puede ver el template de lo que se crea en la carpeta
    generator.
</p>
