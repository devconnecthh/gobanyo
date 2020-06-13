// https://nuxtjs.org/api/pages-middleware/#named-middleware
export default function auth({ store, redirect }) {
  if (!store.state.auth.loggedIn) {
    redirect('/admin/login')
  }
}
