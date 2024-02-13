from pathlib import Path
import sys

def main():
    folder = Path(sys.argv[1])
    for p in folder.iterdir():
        print(f"""{{{{< image src="{p}" alt="ALT_TEXT" position="center" style="border-radius: 8px;" >}}}}""")

if __name__ == "__main__":
    main()
