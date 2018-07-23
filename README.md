# Symfony-Vue

## Requerimientos:
- [Node](https://nodejs.org/)
- [Yarn (tambien puede usarse npm)](https://yarnpkg.com/)
- [Symfony Encore](https://symfony.com/doc/3.4/frontend/encore/installation.html)

## Referencias:
- [Symfony Encore](https://symfony.com/doc/3.4/frontend.html)
- [Encore FAQ](https://symfony.com/doc/3.4/frontend/encore/faq.html)
- [Encore + Vue](https://symfony.com/doc/3.4/frontend/encore/vuejs.html)
- [Getting Started With Vue.Js In Symfony (usa Symfony 4)](https://www.cloudways.com/blog/symfony-vuejs-app/)

## Instalación:
1. `yarn add @symfony/webpack-encore --dev`

2. `yarn add --dev vue vue-loader@^14.2.2 vue-template-compiler webpack-notifier`

3. Configurar Encore: [crear el archivo webpack.config.js](https://symfony.com/doc/3.4/frontend/encore/simple-example.html)
    - Crear las carpetas `assets`, `assets/js` y `assets/css`. Crear el archivo `assets/js/app.js` como indica la documentacion
    - Comandos para compilar los `assets` (javascripts y css)

    ```bash
    # compila en modo "debug" una unica vez
    yarn run encore dev

    # compila en modo "debug" cada vez que se modifican los archivos
    yarn run encore dev --watch

    # compila para produccion (minifica, optimiza, etc)
    yarn run encore production
    ```

4. Referenciar los recursos usando el helper `asset()` de Symfony:

    ```HTML
    <!-- app/Resources/views/base.html.twig -->
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>{% block title %}Symfony - Vue{% endblock %}</title>
            <link rel="stylesheet" href="{{ asset('build/app.css') }}">
            {% block stylesheets %}{% endblock %}
            <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />
        </head>
        <body>
            {% block body %}{% endblock %}
            <script src="{{ asset('build/app.js') }}"></script>
            {% block javascripts %}{% endblock %}
        </body>
    </html>
    ```

5. [Ignorar en SVN/Git](https://symfony.com/doc/3.4/frontend/encore/faq.html) los directorios `/node_modules` y `/web/build`

6. [Configurar el plugin vue-loader](https://symfony.com/doc/3.4/frontend/encore/vuejs.html)

    ```js
    // webpack.config.js

    Encore
        .addEntry('main', './assets/main.js')

        // ...

        .enableVueLoader()

        ;
    ```

7. Inicializamos Vue:

    * Importar Vue y crear la instancia de la aplicacion:

    ```js
    require('../css/app.css');

    // import de otros pluggins

    import Vue from 'vue';

    const app = new Vue({
        el: '#app'
    });
    ```

## Plugins útiles:

1. [MaterializeCSS](https://materializecss.com/)

    * Agregamos el paquete con `yarn`

    ```bash
    $ yarn add materialize-css
    ```


    * Importamos los estilos y el js. Queda global y accesible desde cualquier componente de Vue:

    ```js
    // assets/js/app.js

    require('materialize-css/dist/css/materialize.css');
    import 'materialize-css/dist/js/materialize.js';
    ```

    * Agregar los iconos de Materialize en plantilla base:

    ```HTML
    <!-- app/Resources/views/base.html.twig -->
    <head>
        <link rel="stylesheet" href="{{ asset('build/app.css') }}">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        {% block stylesheets %}{% endblock %}
    </head>
    ```

    * Compilar los recursos `yarn run encore dev`
    * Levantar la aplicacion `php bin/console server:run`


2. [Axios](https://github.com/axios/axios)

    * Agregamos el paquete

    ```bash
    $ yarn add axios
    ```

    * Importamos e inicializamos. Queda global y accesible desde cualquier componente de Vue:

    ```js
    // assets/js/app.js

    // // import de materialize, vue, etc

    import axios from 'axios';

    window.axios = axios;

    // ...
    ```

3. [JQuery](https://jquery.com/)

    * Agregamos el paquete con `yarn`

    ```bash
    $ yarn add jquery
    ```


    * Importamos jquery y se lo asignamos a la variable `$`. Queda global y accesible desde cualquier componente de Vue:

    ```js
    // assets/js/app.js

    const $ = require('jquery');
    ```

4. [Lodash](https://lodash.com/)

    * Agregamos el paquete con `yarn`

    ```bash
    $ yarn add lodash
    ```


    * Importamos Lodash y se lo asignamos a la variable `_`. Queda global y accesible desde cualquier componente de Vue:

    ```js
    // assets/js/app.js

    var _ = require('lodash');
    ```


## Comando para instalar todo con Yarn:
yarn add --dev @symfony/webpack-encore webpack-notifier jquery vue vue-loader@^14 vue-template-compiler materialize-css lodash axios
