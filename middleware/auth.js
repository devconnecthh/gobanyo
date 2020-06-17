import { Auth } from '~/state/auth'
// https://nuxtjs.org/api/pages-middleware/#named-middleware
export default function auth({ redirect }) {
  if (!Auth.loggedIn) {
    redirect('/admin/login')
  }
}
