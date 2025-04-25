def analyze_vitals(data):
    # Convert values from string to int
    heart_rate = int(data.get("heart_rate", 0))
    oxygen = int(data.get("oxygen", 0))
    bp = int(data.get("bp", 0))

    risk = "normal"
    if heart_rate > 100 or oxygen < 90 or bp > 140:
        risk = "alert"

    return {
        "heart_rate": heart_rate,
        "oxygen": oxygen,
        "bp": bp,
        "risk_level": risk,
        "message": "Risk detected!" if risk == "alert" else "Vitals normal"
    }
