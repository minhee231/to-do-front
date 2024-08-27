<template>
    <v-container>
        <!-- @submit.prevent << 이게 form 날릴 때 화면 깜빡임 XXX 개꿀!1! -->
        <v-form @submit.prevent="register">
            <v-text-field v-model="username" label="아이디" required>
            </v-text-field> 
            <v-text-field v-model="password" label="비밀번호" type="password" required>
            </v-text-field> 
            <v-text-field v-model="confirmPassword" label="비밀번호 확인" required>
            </v-text-field> 
            <v-btn type="submit" color="primary">
                회원가입
            </v-btn>
            <v-alert v-if="error" type="error">
                {{ error }}
            </v-alert>
        </v-form>
    </v-container>
</template>

<script>
import authService from '@/services/authService';

export default {
    name: 'RegisterS',
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            error: null
        }
    },

    methods: {
        async register() {
            if(this.password !== this.confirmPassword) {
                this.error = '비밀번호가 일치하지 않습니다.'
                return
            }

            try {
                console.log("Happy Cat")
                await authService.register(this.username, this.password)
                this.$router.push('/login')
            } catch(error) {
                console.error(error)
                this.error = '회원가입에 실패하였습니다.'
            }
        }
    }
}

</script>