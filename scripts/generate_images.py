#!/usr/bin/env python3
"""Generate all Spark Electric images via fal.ai Flux Schnell."""
import subprocess, json, time, os, sys

API_KEY = "5b34dd81-df6e-477e-b4b6-9b37071116f5:4a13a704ffdf5a647d43db4f32864142"
BASE = "https://queue.fal.run/fal-ai/flux/schnell"
OUT_DIR = "/home/mudassir/spark-electric/public/images"

os.makedirs(f"{OUT_DIR}/services", exist_ok=True)
os.makedirs(f"{OUT_DIR}/projects", exist_ok=True)

def fal(method, path, data=None):
    args = ["curl", "-s", "-X", method, f"{BASE}{path}",
            "-H", f"Authorization: Key {API_KEY}",
            "-H", "Content-Type: application/json"]
    if data:
        args += ["-d", json.dumps(data)]
    r = subprocess.run(args, capture_output=True, text=True)
    return json.loads(r.stdout)

# All images to generate
jobs = [
    # Hero
    ("hero-bg.jpg", "Professional licensed electrician working in a bright modern home, installing wiring, natural lighting, clean and professional atmosphere, high quality photography, warm tones"),
    # Services
    ("services/residential-wiring.jpg", "Professional electrician installing wiring in a beautiful modern residential home living room, clean wires, bright natural light, high end interior"),
    ("services/commercial-electrical.jpg", "Electrician working on electrical systems in a modern office building with exposed ceiling, commercial lighting, professional setting"),
    ("services/panel-upgrades.jpg", "Close-up of a modern electrical circuit breaker panel being upgraded, electrician's hands working, organized wires, professional installation"),
    ("services/lighting-design.jpg", "Beautiful modern kitchen with custom LED lighting design, under-cabinet lights, pendant lights over island, warm ambient glow"),
    ("services/emergency-repairs.jpg", "Emergency electrician in a van arriving at night with warning lights, ready for urgent repair, dramatic lighting"),
    ("services/ev-charger-install.jpg", "Modern electric car charging at a home EV charging station installed in a garage, clean setup, blue LED indicator"),
    ("services/smart-home.jpg", "Modern smart home with tablet control showing lighting and security controls, automated blinds, voice assistant device"),
    ("services/safety-inspections.jpg", "Professional electrician conducting safety inspection with testing equipment, clipboard, checking circuit breakers"),
    # Projects
    ("projects/lakeside-home-rewire.jpg", "Beautiful lakeside luxury home exterior with professional electrical work completed, modern architecture, sunset lighting"),
    ("projects/modern-kitchen-lighting.jpg", "Stunning modern kitchen with layered LED lighting design, under-cabinet strips, elegant pendant lights, marble counters"),
    ("projects/smart-home-upgrade.jpg", "High-tech smart home interior with wall-mounted control panels, automated systems, modern minimalist design"),
    ("projects/downtown-office-build.jpg", "Modern downtown office building lobby with professional commercial lighting installation, glass walls, sleek design"),
    ("projects/retail-center-power.jpg", "Modern retail shopping center exterior with professional electrical infrastructure, storefront lighting, clean design"),
    ("projects/restaurant-renovation.jpg", "Elegant restaurant interior with ambient lighting design, warm tones, bar area with accent lighting"),
    ("projects/factory-floor-power.jpg", "Large industrial manufacturing facility with professional electrical installations, overhead power distribution, safety lighting"),
    ("projects/warehouse-led-retrofit.jpg", "Large warehouse with modern LED high-bay lighting, bright and efficient, organized aisles"),
    ("projects/solar-farm-connection.jpg", "Large solar panel farm with professional electrical grid connection infrastructure, blue sky, renewable energy"),
]

print(f"Submitting {len(jobs)} image generation requests...")
requests = {}
for filename, prompt in jobs:
    result = fal("POST", "", {
        "prompt": prompt,
        "image_size": "landscape_4_3",
        "num_images": 1
    })
    rid = result.get("request_id", "")
    requests[rid] = filename
    print(f"  Submitted: {filename} → {rid}")

# Poll until all done
print("\nWaiting for completion...")
completed = {}
while len(completed) < len(requests):
    for rid, filename in list(requests.items()):
        if rid in completed:
            continue
        status = fal("GET", f"/requests/{rid}/status")
        if status.get("status") == "COMPLETED":
            result = fal("GET", f"/requests/{rid}")
            images = result.get("images", [])
            if images:
                url = images[0].get("url", "")
                completed[rid] = (filename, url)
                print(f"  Done: {filename}")
    if len(completed) < len(requests):
        time.sleep(2)

# Download
print(f"\nDownloading {len(completed)} images...")
for rid, (filename, url) in completed.items():
    path = os.path.join(OUT_DIR, filename)
    subprocess.run(["curl", "-s", "-o", path, url], check=True)
    size = os.path.getsize(path)
    print(f"  Saved: {filename} ({size:,} bytes)")

print(f"\n✅ All {len(completed)} images generated and saved!")
