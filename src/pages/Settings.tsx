import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useApiKey } from "@/contexts/ApiKeyContext";
import { useState } from "react";
import { toast } from "sonner";

// Load API key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("Loaded API Key:", apiKey); // Check if it loads correctly

export default function Settings() {
  const { geminiApiKey, setGeminiApiKey, clearGeminiApiKey } = useApiKey();
  const [inputApiKey, setInputApiKey] = useState(geminiApiKey || apiKey || "");

  const handleSaveApiKey = () => {
    if (inputApiKey.trim()) {
      setGeminiApiKey(inputApiKey.trim());
      toast.success("API key saved successfully");
    } else {
      clearGeminiApiKey();
      toast.info("API key cleared");
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
      
      <Card>
        <CardHeader className="py-3 md:py-4">
          <CardTitle>App Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">AI Assistant Configuration</h3>
              <div className="space-y-2">
                <Label htmlFor="gemini-api-key">Google Gemini API Key</Label>
                <Input
                  id="gemini-api-key"
                  value={inputApiKey}
                  onChange={(e) => setInputApiKey(e.target.value)}
                  type="password"
                  placeholder="Enter your Gemini API key"
                />
                <p className="text-sm text-muted-foreground">
                  Get your API key from{" "}
                  <a
                    href="https://ai.google.dev/tutorials/setup"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    Google AI Studio
                  </a>
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setInputApiKey("");
                    clearGeminiApiKey();
                    toast.info("API key cleared");
                  }}
                >
                  Clear
                </Button>
                <Button onClick={handleSaveApiKey}>Save API Key</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
