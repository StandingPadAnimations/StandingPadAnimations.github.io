default: build commit

# Build in the Docs folder
build:
  hugo --destination docs

# Preview
preview:
  hugo server --disableFastRender --destination docs

# Add and commit
commit:
  git add .
  git commit --signoff
