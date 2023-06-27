default: build commit

# Build in the Docs folder
build:
  hugo --destination docs

# Preview
preview:
  hugo server --disableFastRender

# Add and commit
commit:
  git add .
  git commit
