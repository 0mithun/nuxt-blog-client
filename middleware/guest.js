export default async function ({ redirect, app }) {
    if(app.$auth.logedIn){
      return redirect('/')
    }

}
