from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os

dir_path = r"C:\Users\Izzat\.gemini\antigravity\scratch\ecc-workspace\kitchen-system"
os.chdir(dir_path)

PORT = 9090
server_address = ('0.0.0.0', PORT)

class CustomHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

httpd = ThreadingHTTPServer(server_address, CustomHandler)
print(f"Server running on http://localhost:{PORT}")
httpd.serve_forever()
