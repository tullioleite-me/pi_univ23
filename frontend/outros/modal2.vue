<template>
    <section>
        <b-button label="Launch component modal" type="is-primary" size="is-medium"
            @click="isComponentModalActive = true" />

        <b-modal v-model="isComponentModalActive" has-modal-card trap-focus :destroy-on-hide="false" aria-role="dialog"
            aria-label="Example Modal" close-button-aria-label="Close" aria-modal>
            <template #default="props">
                <modal-form v-bind="formProps" @login="login"></modal-form>
            </template>
        </b-modal>
    </section>
</template>

<script>
const ModalForm = {
    props: ['email', 'password', 'canCancel'],
    /*html*/
    template: `
            <form @submit="login">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                v-model="emailEntered"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                v-model="passwordEntered"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="$emit('close')" />
                        <b-button
                            label="Login"
                            native-type="submit"
                            type="is-primary" />
                    </footer>
                </div>
            </form>
        `,
    methods: {
        login() {
            this.$emit('login', { email: this.emailEntered, password: this.passwordEntered })
        }
    },
    data() {
        return {
            emailEntered: null,
            passwordEntered: null,
        }
    },
}

export default {
    components: {
        ModalForm
    },
    data() {
        return {
            isComponentModalActive: true,
            formProps: {
                email: 'evan@you.com',
                password: 'testing'
            }
        }
    },
    methods: {
        login({ email, password }) {
            console.log("login!!!!!", email)
            console.log("login!!!!!", password)
        }
    }
}
</script>
