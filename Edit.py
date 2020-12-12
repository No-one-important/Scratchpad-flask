from flask import Flask, render_template

app = Flask('app')

@app.route('/Scratchpad/<saveName>')

def run(saveName):
    return render_template('index.html', saveName=saveName)

app.run(host='0.0.0.0', port=8080, debug=True)
