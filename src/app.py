
from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
from io import BytesIO
from PIL import Image
import traceback
from rembg import remove  # rembg performs background removal using a pretrained U^2-Net

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/remove-background', methods=['POST'])
def remove_background():
    try:
        data = request.json
        if 'image' not in data:
            return jsonify({"error": "No image provided"}), 400

        # Decode the Base64 image data (without the header)
        image_data = base64.b64decode(data['image'])
        input_buffer = BytesIO(image_data)
        # Open the image with Pillow and convert to RGBA
        input_image = Image.open(input_buffer).convert("RGBA")

        # Save the image to a byte buffer in PNG format
        buffered_input = BytesIO()
        input_image.save(buffered_input, format="PNG")
        input_bytes = buffered_input.getvalue()

        # Remove background using rembg (U^2-Net)
        output_bytes = remove(input_bytes)

        # Open the resulting image and convert to RGBA (for consistency)
        output_image = Image.open(BytesIO(output_bytes)).convert("RGBA")
        buffered_output = BytesIO()
        output_image.save(buffered_output, format="PNG")
        result_image = base64.b64encode(buffered_output.getvalue()).decode("utf-8")

        return jsonify({"image": result_image})

    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
