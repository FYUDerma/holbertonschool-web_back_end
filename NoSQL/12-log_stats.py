#!/usr/bin/env python3
"""Log Stats"""
from pymongo import MongoClient


def log_stats():
    """Log Stats"""
    client = MongoClient()
    logs = client.logs.nginx

    total_logs = logs.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    method = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for methods in method:
        count = logs.count_documents({"method": methods})
        print(f"\tmethod {method}: {count}")

    status_check = logs.count_documents({
        "method": "GET",
        "path": "/status"
        })
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
