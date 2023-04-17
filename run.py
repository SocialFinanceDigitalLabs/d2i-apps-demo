import logging
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler
import build
import http.server
import socketserver


class EventHandler(LoggingEventHandler):
    """Logs and builds all the events captured."""

    def on_any_event(self, event):
        if not event.src_path.endswith(".json"):
            build.build()


def run_server():
    PORT = 8000
    Handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), Handler)
    print("serving at port", PORT)
    httpd.serve_forever()


def run():
    build.build()
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    event_handler = EventHandler()
    observer = Observer()
    observer.schedule(event_handler, ".", recursive=True)
    observer.start()
    try:
        run_server()
    finally:
        observer.stop()
        observer.join()


if __name__ == "__main__":
    run()
