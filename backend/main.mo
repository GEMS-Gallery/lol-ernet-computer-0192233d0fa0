import Nat "mo:base/Nat";
import Text "mo:base/Text";

import Debug "mo:base/Debug";

actor {
    stable var jokeCounter : Nat = 0;

    public func getJokeCounter() : async Nat {
        return jokeCounter;
    };

    public func incrementJokeCounter() : async () {
        jokeCounter += 1;
        Debug.print("Joke counter incremented to: " # Nat.toText(jokeCounter));
    };
}
