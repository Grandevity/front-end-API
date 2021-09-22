"""
 Application of Programming Principles
 Assignment Template 2021 - Flask & Python
"""
from flask import Flask, render_template, jsonify, request, make_response
import sys, json

app = Flask(__name__)

"""
NOTICE FOR TESTING PURPOSE - CHANGE LINES 103 AND 138 TO LOAD JOURNAL_TEST.JSON <-------------
"""


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/api/add", methods=['GET'])
def add():
    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    ans = float(num1) + float(num2)

    response = make_response(
        jsonify(
            {"result": str(ans)}
        ),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    return response


@app.route("/api/subtract", methods=['GET'])
def subtract():
    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    ans = float(num1) - float(num2)

    response = make_response(
        jsonify(
            {"result": str(ans)}
        ),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    return response


@app.route("/api/multiply", methods=['GET'])
def multiply():
    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    ans = float(num1) * float(num2)

    response = make_response(
        jsonify(
            {"result": str(ans)}
        ),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    return response


@app.route("/api/divide", methods=['GET'])
def divide():
    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    try:
        if float(num1) == 0 or float(num2) == 0:
            raise ZeroDivisionError

        ans = float(num1) / float(num2)
        response = make_response(
            jsonify(
                {"result": str(ans)}
            ),
            200,
        )
        response.headers["Content-Type"] = "application/json"
        return response

    except ZeroDivisionError:
        response = make_response(
            jsonify(
                {"result": "Cannot divide by 0."}
            )
        )
        return response


@app.route("/api/journal", methods=['GET', 'PUT'])
def journal():
    """
    Write a function to
        read the entries in the file containing the journal entries in the data folder
        format the result into JSON response object
        return the JSON response object
    """
    with open("data/journal_test.json", "r") as f:  # CHANGE JOURNAL.JSON TO JOURNAL_TEST.JSON (1/2 IN CODE)
        data = (f.readlines())  # reading the whole file.
        f.close()  # close the file, stops memory leak.

    response = make_response(jsonify({"result": data}), 200)
    response.headers["content-Type"] = "application/json"
    return response


@app.route("/api/journal_sync", methods=['GET', 'PUT'])
def journal_sync():
    data = request.args.get('data')
    data = data.split(",")
    json_array = '{"journals":['
    i = 0

    for x in range(-1, int((len(data) - 1) / 4)):
        join_char = " "

        name = data[i + 1].split(join_char)
        name = '"' + join_char.join(name[2:]) + '"'

        date = data[i + 2].split(join_char)
        date = '"' + join_char.join(date[2:]) + '"'

        notes = data[i + 3].split(join_char)
        notes = '"' + join_char.join(notes[2:]) + '"'

        i = i + 4

        json_array += '{"name": ' + name + ', "date":' + date + ', "note": ' + notes + '},'

    json_array = json_array[0:int(len(json_array) - 1)]
    json_array += "]}"

    with open("data/journal_test.json", "w") as f:  # CHANGE JOURNAL.JSON TO JOURNAL_TEST.JSON (2/2 IN CODE)
        f.truncate(0)  # deletes previous contents of file.
        f.write(json_array)
        f.close()  # close the file, stops memory leak.

    return "Journal Successfully Uploaded to server"


@app.route("/api/thoughts", methods=['GET', 'PUT'])
def thought_grab():
    with open("data/thoughts.json", "r") as f:
        data = (f.readlines())  # reading the whole file.
        f.close()  # close the file, stops memory leak.

    response = make_response(jsonify({"result": data}), 200)
    response.headers["content-Type"] = "application/json"

    return response


@app.route("/api/thought_sync", methods=['GET', 'PUT'])
def thought_sync():
    data = request.args.get('data')
    data = data.split(",")
    json_array = '{"thoughts":['
    i = 0

    for x in range(-1, int((len(data) - 1))):
        thought = '"' + data[i] + '"'

        i += 1

        json_array += '{"thought": ' + thought + '},'

    json_array = json_array[0:int(len(json_array) - 1)]
    json_array += "]}"

    with open("data/thoughts.json", "w") as f:
        f.truncate(0)  # deletes previous contents of file.
        f.write(json_array)
        f.close()  # close the file, stops memory leak.

    return "Thoughts Successfully Uploaded to server"


if __name__ == '__main__':
    app.run()
