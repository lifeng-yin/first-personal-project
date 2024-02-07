import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { AlertCircle } from "lucide-react"
import useAppStateStore from "@/contexts/app-state"
import { Link, useLocation } from "wouter"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [, navigate] = useLocation()

  const { pocketbase } = useAppStateStore()

  const handleGoogleSignup = async () => {
    let w = window.open()
    
    const authData = await pocketbase
    .collection("users")
    .authWithOAuth2({
      provider: 'google',
      urlCallback: (url) => {
          if (w) {
            w.location.href = url
          }
      },
    })

    console.log(authData)
  }
  const handlePasswordSignup = async () => {
    setErrorMessage('')
    if (!email || !password) {
      setErrorMessage('Please fill out all form fields. ')
    }

    if (errorMessage === '') {
      try {
        const authData = await pocketbase
          .collection("users")
          .authWithPassword(
            email,
            password
          )
        
        navigate('/app/dashboard')

      } catch (e: any) {
        setErrorMessage(`Incorrect email or password.`)
        console.error(e)
      }
    }

  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
        <Card className="px-10 py-8">
          <CardHeader>
            <h1 className="text-[2.5rem] font-semibold text-center">Log In</h1>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              onClick={handleGoogleSignup}
              className="text-lg gap-4 w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
              Sign in with Google
            </Button>
            <br />
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-500" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-950 px-2 text-slate-500 text-sm">
                  Or sign in with email
                </span>
              </div>
        </div>
            
            <Label htmlFor="email" className="text-lg mb-4">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="outline-none focus:outline-black mb-4"
            />
            <Label htmlFor="password" className="text-lg mb-4">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="outline-none focus:outline-black mb-4"
            />
            <Button className="text-xl py-3 font-semibold mb-3 w-full" onClick={handlePasswordSignup}>Log In</Button>
            <br />
            <span className="text-gray-500">Don't have an account?&nbsp;</span>
            <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
            { errorMessage.length ? <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {errorMessage}
              </AlertDescription>
            </Alert> : <></>}
          </CardContent>
        </Card>
    </div>
    
  )
}

export default Login