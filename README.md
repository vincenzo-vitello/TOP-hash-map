# HashMap Implementation in JavaScript

This project provides a basic implementation of a `HashMap` data structure in JavaScript. The `HashMap` class stores key-value pairs and supports standard operations such as adding, retrieving, and deleting elements, as well as resizing when the load factor threshold is exceeded.

## Features

- Store key-value pairs using hashing.
- Collision handling using separate chaining (buckets with arrays).
- Automatic resizing when the load factor exceeds `0.75`.
- Supports the following operations:
  - `set(key, value)`: Adds or updates a key-value pair.
  - `get(key)`: Retrieves the value associated with a key.
  - `has(key)`: Checks if a key exists in the map.
  - `remove(key)`: Deletes a key-value pair.
  - `length()`: Returns the number of stored elements.
  - `clear()`: Removes all elements.
  - `keys()`: Returns all keys in the map.
  - `values()`: Returns all values in the map.
  - `entries()`: Returns all key-value pairs in the map.

## Resizing Mechanism

- The map starts with an initial capacity of 16.
- When the number of stored elements exceeds 75% of the current capacity, the map resizes to double its previous size.
- All existing elements are rehashed and reinserted into the new buckets.

## How It Works

The HashMap class uses a simple hash function to determine the index where a key should be stored. If multiple keys hash to the same index (collision), they are stored in a bucket (an array of key-value pairs). The class dynamically resizes itself when necessary.
