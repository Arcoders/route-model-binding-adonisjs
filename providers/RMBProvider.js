const { ServiceProvider } = require('@adonisjs/fold')

class RMBProvider extends ServiceProvider {

    boot() {

        use('Server').registerNamed({

            bind: async (request, next, [model]) => {

                const key = request.params[model.toLowerCase()]

                const field = (use('Env').get('DB_CONNECTION') === 'mongodb') ? '_id' : 'id'

                if (key) request[model.toLowerCase()] = await use(`App/Models/${model}`).findBy(field, key)

                await next()
            }

        });

        use('Route').Route.macro('bind', function (model) {

            this.middleware(`bind:${model}`)
            return this

        })

    }

}

module.exports = RMBProvider
