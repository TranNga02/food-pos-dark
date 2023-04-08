import { Component, Vue } from 'vue-property-decorator';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { signIn } from '@/api/auth';

@Component({
  components: { Input, Button },
})
export default class SignInContainer extends Vue {
  email = 'althea.pollich@example.com';
  password = 't0ny@2022';
  errorMessage = '';

  async clickBtn(): Promise<void> {
    sessionStorage.setItem('error', '');
    this.errorMessage = this.getErrorMessage();

    const signInInfo: Auth.SignIn = {
      email: this.email,
      password: this.password,
      device_type: '1',
      device_id: '',
      device_token: '',
    };

    try {
      await signIn(signInInfo);
    } catch (error) {
      console.log(error);
    }

    this.errorMessage = this.getErrorMessage();
  }

  getErrorMessage(): string {
    return sessionStorage.getItem('error');
  }

  onChangeEmail(email: string): void {
    this.email = email;
  }

  onChangePassword(password: string): void {
    this.password = password;
  }
}
